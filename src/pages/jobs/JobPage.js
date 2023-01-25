import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Job from "./Job";
import PopularProfiles from "../profiles/PopularProfiles";

function JobPage() {
    const { id } = useParams();
    const [job, setJob] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: job}] = await Promise.all([
                    axiosReq.get(`/jobs/${id}`)
                ])
                setJob({results: [job]})                
            } catch (err){
                console.log(err)
            }
        }
        handleMount();
    }, [id])
  


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Job {...job.results[0]} setJob={setJob} />
        <Container className={appStyles.Content}>
          Comments
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default JobPage;