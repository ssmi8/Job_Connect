import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


const Jobs = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        title,
        content,
        image,
        updated_at,
        jobPage,
        setJobs,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/jobs/${id}/edit`)
    }

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/jobs/${id}`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post("/likes/", { job: id});
            setJobs((prevJobs) => ({
                ...prePosts,
                results: prevJobs.results.map((job) => {
                    return job.id === id
                    ? {...job, likes_count: post.likes_count +1, like_id: data.id }
                    : job;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}`);
            setJobs((prevJobs) => ({
                ...prevJobs,
                results: prevJobs.results.map((job) => {
                    return job.id === id
                    ? { ...job, likes_count: post.likes_count - 1, like_id: null }
                    : job;
                }),
            }));
          } catch (err) {
            console.log(err);
        }
    };

return (
    <Card className="mb-3">
        <Card.Body>
            <div className="d-flex justify-content-between">
                <div>
                    <Card.Title>
                        {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                    </Card.Title>
                    <Card.Subtitle className="text-muted mb-2">
                        
                    </Card.Subtitle>
                </div>
            </div>
        </Card.Body>

    </Card>
)


};

