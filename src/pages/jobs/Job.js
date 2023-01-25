import React from 'react';
import styles from "../../styles/Job.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Avatar from "../../components/Avatar";

const Job = (props) => {
    const {
        id, owner, profile_id, profile_image, title, content, location, company, image, updated_at, jobPage, 
    } = props;

     const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

  return (
    <Card className={styles.Job}>
        <Card.Body>
            <Media className="align-text-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                    {owner}
                </Link>
                <div className='d-flex align-items-center'>
                    <span>{updated_at}</span>
                    {is_owner && jobPage && "..."}
                </div>
            </Media>
        </Card.Body>
        <Link to={`/jobs/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        {location && <Card.Text>{location}</Card.Text>}
        {company && <Card.Text>{company}</Card.Text>}
      </Card.Body>
    </Card>
  )
}

export default Job