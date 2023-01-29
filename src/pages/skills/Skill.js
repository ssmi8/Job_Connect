import React from "react";
import styles from "../../styles/Skill.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Skill = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        title,
        content,
        image,
        skillPage,
        updated_at,
      } = props;

      const currentUser =useCurrentUser();
      const is_owner = currentUser?.username === owner;
      const history = useHistory();

      const handleEdit = () => {
        history.push(`/skills/${id}/edit`)
      }

      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/skills/${id}`);
          history.goBack();
        } catch (err) {
          
        }
      };
      
  return (
    <Card className={styles.Skill}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && skillPage && (
              <MoreDropdown
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/skills/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>
    </Card>
  )
}

export default Skill;