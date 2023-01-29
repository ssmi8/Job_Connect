import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosReq } from '../../api/axiosDefaults';

import { Row, Col } from "react-bootstrap";

import Skill from './Skill';
import PopularProfiles from '../profiles/PopularProfiles';

function SkillPage() {
    const { id } = useParams();

    const [skill, setSkill] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: skill }] = await Promise.all([
                    axiosReq.get(`/skills/${id}`),
                ]);
                setSkill({ results: [skill] });
            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
    }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Skill {...skill.results[0]} setSkill={setSkill} skillPage />
      </Col>

      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
};

export default SkillPage