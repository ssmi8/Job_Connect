import React from 'react';
import styles from "../../styles/Job.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

const Job = (props) => {
    const {
        id, owner, profile_id, profile_image, comments_count, likes_count, 
        like_id, title, description, location, company, image, updated_at, jobPage, 
        setJobs
    } = props;

    const handleLike = async () => {
        try {
          const { data } = await axiosRes.post("/likes/", { job: id });
          setJobs((prevJobs) => ({
            ...prevJobs,
            results: prevJobs.results.map((job) => {
              return job.id === id
                ? { ...job, likes_count: job.likes_count + 1, like_id: data.id }
                : job;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
    };

    const handleUnlike = async () => {
        try {
          await axiosRes.delete(`/likes/${like_id}/`);
          setJobs((prevJobs) => ({
            ...prevJobs,
            results: prevJobs.results.map((job) => {
              return job.id === id
                ? { ...job, likes_count: job.likes_count - 1, like_id: null }
                : job;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
    };

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
        {description && <Card.Text>{description}</Card.Text>}
        {location && <Card.Text>{location}</Card.Text>}
        {company && <Card.Text>{company}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own job post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like job postings!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/jobs/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  )
}

export default Job