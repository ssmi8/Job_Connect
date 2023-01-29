import React, { useEffect, useState } from "react";

import { Form, Col, Row, Container } from "react-bootstrap";

import appStyles from "../../App.module.css";
import styles from "../../styles/JobsPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Job from "./Job";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utlis";
import Asset from "../../components/Asset";
import PopularProfiles from "../profiles/PopularProfiles";

function JobsPage({message, filter = ""}) {
    const [jobs, setJobs] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    const [query, setQuery]= useState("");

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const { data } = await axiosReq.get(`/jobs/?${filter} search=${query}`)
                setJobs(data)
                setHasLoaded(true)
            } catch(err){
               
    
            }
        };
        setHasLoaded(false);
        /* to stop the search requests after every key typed - delay response */
        const timer = setTimeout(() => {
          fetchJobs();
        },)
        return () => {
            clearTimeout(timer)
        }
          
      }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <PopularProfiles mobile />
        {/* search bar and query to search profiles/posts */}
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form className={styles.SearchBar}
        onSubmit={(event) => event.preventDefault()}
        >
         <Form.Control
         value={query}
         onChange={(event) => setQuery(event.target.value)}
         type="text"
         className="mr-sm-2"
         placeholder="Search jobs"
         />            
        </Form>

        {hasLoaded ? (
          <>
            {jobs.length ? (
              <InfiniteScroll
                children={
                    jobs.map((job) => (
                        <Job key={job.id} {...job} setJobs={setJobs} />
                      ))
                }
                dataLength={jobs.length}
                loader={<Asset spinner />}
                hasMore={!!jobs.next}
                next={() => fetchMoreData(jobs, setJobs)}
              />              
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default JobsPage;