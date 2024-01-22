import "./information.css";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Information = () => {
  const [selectedEventType, setSelectedEventType] = useState("Travel Grants");
  const handleEventTypeClick = (eventType) => {
    setSelectedEventType(eventType);
  };
  const tableData = [
    {
      fundingAgency: "SERB",
      grantName: "International Travel Scheme (ITS)",
      deadline: "60-90 days in advance from the date of start of the event",
      maxAmount: "Not mentioned",
      websiteLink: "https://www.serbonline.in/SERB/its",
    },
    {
      fundingAgency: "CSIR",
      grantName: "Travel Grant Scheme",
      deadline: "60-120 days in advance from the date of start of the event",
      maxAmount: "Not mentioned",
      websiteLink: "https://csirhrdg.res.in/Home/Index/1/InPage/51/14",
    },
    {
      fundingAgency: "ICMR",
      grantName: "International Travel By Non-ICMR Scientists",
      deadline: "more than 60 days in advance",
      maxAmount: "1,50,000",
      websiteLink:
        "https://main.icmr.nic.in/content/international-travel-non-icmr-scientists",
    },
    {
      fundingAgency: "INSA",
      grantName: "INSA-DAE/BRNS-CICS Travel Fellowship Programme",
      deadline: "6 times in a year, please refer application",
      maxAmount: "Not mentioned",
      websiteLink:
        "https://www.prsu.ac.in/admin/theme/alumni_uploads/19032020040613.pdf",
    },
    {
      fundingAgency: "NBHM/DAE",
      grantName: "Travel Grant",
      deadline: "at least 3 months before the date of the programme",
      maxAmount: "Not mentioned",
      websiteLink: "http://www.nbhm.dae.gov.in/travel.html",
    },
    {
      fundingAgency: "Department of Biotechnology",
      grantName:
        "Conference, Travel, Exhibition and Popular Lectures (CTEP) travel grant",
      deadline:
        "Applications must be submitted at least 12 weeks in advance but not more than 24 weeks in advance",
      maxAmount: "Not mentioned",
      websiteLink: "https://www.dbtctep.gov.in/",
    },
    {
      fundingAgency: "ACM India-IARCS",
      grantName: "Travel grants",
      deadline: "Not mentioned",
      maxAmount: "1,00,000",
      websiteLink: "https://www.iarcs.org.in/activities/grants.php",
      fieldSpecificComments: "",
    },
    {
      fundingAgency: "ICTP",
      grantName: "APS-EPS-ICTP Travel Award Fellowship Programme (ATAP)",
      deadline: "At least 2 months in advance",
      maxAmount: "Not mentioned",
      websiteLink:
        "https://www.ictp.it/opportunity/aps-eps-ictp-travel-award-fellowship-programme-atap",
      fieldSpecificComments: "Various branches of physical sciences",
    },
    {
      fundingAgency: "American Physical Society",
      grantName: "IUSSTF-American Physical Society Fellowship Program",
      deadline: "Not mentioned",
      maxAmount: "USD 4,000",
      websiteLink:
        "https://www.aps.org/programs/international/honors/us-india-travel.cfm",
      fieldSpecificComments: "Student exchange program, Not for conference",
    },
    {
      fundingAgency: "American Geophysical Union",
      grantName: "AGU STUDENT TRAVEL GRANTS",
      deadline: "Not mentioned",
      maxAmount: "$1,000 USD",
      websiteLink:
        "https://www.agu.org/Learn-and-Develop/Learn/Travel-Research-Grants/Fall-Meeting-General-STG",
    },
    {
      fundingAgency: "Microsoft India Academic Outreach",
      grantName: "MSR India’s Student Travel Grant Program",
      deadline: "At least 45 days in advance of the conference dates",
      maxAmount: "Not mentioned",
      websiteLink:
        "https://www.microsoft.com/en-us/research/academic-program/academic-outreach/",
    },
    {
      fundingAgency: "Google",
      grantName: "Google Conference Scholarships (APAC)",
      deadline: "Varies",
      maxAmount: "Varies",
      websiteLink:
        "https://buildyourfuture.withgoogle.com/scholarships/google-conference-scholarships",
    },
    {
      fundingAgency: "International Brain Rsearch Organization",
      grantName: "IBRO Grants & Training",
      deadline: "Not mentioned",
      maxAmount: "Not mentioned",
      websiteLink: "https://ibro.org/grants-training/",
      fieldSpecificComments: "neuroscience",
    },
    {
      fundingAgency: "RSTA IITD",
      grantName: "RESEARCH SCHOLAR TRAVEL AWARD",
      deadline: "Anytime in the year",
      maxAmount: "1,50,000",
      websiteLink:
        "https://academics.iitd.ac.in/sites/default/files/utility/forms/Travel%20grant%20%28RSTA%29%20form.pdf",
    },
    {
      fundingAgency: "RETA IITD",
      grantName: "RESEARCH EXCELLENCE TRAVEL AWARD",
      deadline: "Anytime in the year",
      maxAmount: "1,50,000",
      websiteLink:
        "https://academics.iitd.ac.in/sites/default/files/utility/forms/Travel%20grant%20%28RSTA%29%20form.pdf",
    },
    {
      fundingAgency: "European Society of Biomechanics",
      grantName: "Travel Awards",
      deadline: "Not mentioned",
      maxAmount: "€400",
      websiteLink:
        "https://esbiomech.org/esb-awards/travel-awards/#:~:text=The%20purpose%20of%20the%20Travel,expenses%20during%20the%20ESB%20meeting.",
    },
    {
      fundingAgency: "DAAD travel grant",
      grantName: "The Marbach Fellowship Programs",
      deadline: "Next application deadline is 30 September 2023",
      maxAmount: "Not mentioned",
      websiteLink:
        "https://www.dla-marbach.de/en/research/the-marbach-fellowship-programs/",
    },
    {
      fundingAgency: "ACM-W",
      grantName: "Computer Science Research Conference Scholarships",
      deadline: "Multiple dates, refer to the website",
      maxAmount: "$1,200",
      websiteLink: "https://women.acm.org/scholarships/",
      fieldSpecificComments: "Computer science (women only)",
    },
    {
      fundingAgency: "AGU STUDENT TRAVEL GRANTS",
      grantName: "AGU STUDENT TRAVEL GRANTS",
      deadline: "2023 applications are closed",
      maxAmount: "$1,000 USD",
      websiteLink:
        "https://www.agu.org/learn-and-develop/learn/travel-research-grants/fall-meeting-general-stg#stg-requirements",
    },
    {
      fundingAgency: "Biochemical Society",
      grantName: "General Travel Grants",
      deadline: "Multiple dates, refer to the website",
      maxAmount: "£300 and £500",
      websiteLink: "https://biochem.smapply.io/prog/general_travel_grants/",
    },
    {
      fundingAgency: "Royal Society of Chemistry",
      grantName: "Rideal Travel Bursary",
      deadline: "Multiple dates, refer to the website",
      maxAmount: "£500",
      websiteLink:
        "https://www.rsc.org/prizes-funding/funding/find-funding/#undefined",
      fieldSpecificComments:
        "colloid and surface science especially heterogeneous catalysis",
    },
    {
      fundingAgency: "ICHR",
      grantName: "Conferences Grant",
      deadline: "not mentioned, refer to the website",
      maxAmount: "3,50,000",
      websiteLink:
        "http://www.ichr.ac.in/v3/seminarworkshopconference-grant.php",
      fieldSpecificComments: "History",
    },
    {
      fundingAgency: "INLAKS SHIVDASANI FOUNDATION",
      grantName: "RESEARCH AND TRAVEL GRANTS",
      deadline: "1 September 2023",
      maxAmount: "USD 1000",
      websiteLink:
        "https://www.inlaksfoundation.org/irtg/inlaks-travel-and-research-grant/",
      fieldSpecificComments: "Humanities and Social Sciences",
    },
  ];

  return (
    <Container>
      <div className="container-head">
        Here you will information regarding Travel Grants, Scholarships,
        External Events and much more!
      </div>
      <div className="event-types">
        <button
          className={selectedEventType === "Travel Grants" ? "selected" : ""}
          onClick={() => handleEventTypeClick("Travel Grants")}
        >
          Travel Grants
        </button>
        <button
          className={selectedEventType === "External Events" ? "selected" : ""}
          onClick={() => handleEventTypeClick("External Events")}
        >
          External Events
        </button>
        <button
          className={selectedEventType === "Scholarships" ? "selected" : ""}
          onClick={() => handleEventTypeClick("Scholarships")}
        >
          Scholarships
        </button>
      </div>
      {selectedEventType === "Travel Grants" ? (
        <>
          <div className="table-container">
            <table className="travel-grant-table">
              <thead>
                <tr>
                  <th>Funding Agency</th>
                  <th>Name of Travel Grant</th>
                  <th>Deadline</th>
                  <th>Maximum Amount</th>
                  <th>Website Link</th>
                  {/* <th>Field Specific/Comments</th> */}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.fundingAgency}</td>
                    <td>{row.grantName}</td>
                    <td>{row.deadline}</td>
                    <td>{row.maxAmount}</td>
                    <td>
                      <a
                        href={row.websiteLink}
                        target=""
                        rel="noopener noreferrer"
                      >
                        {row.websiteLink}
                      </a>
                    </td>
                    {/* <td>{row.comments}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <h1 className="empty-page">Will be Updated Soon</h1>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem 0;

  .event-types {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    button {
      background-color: #fff;
      color: black;
      border: solid 1px #fff;
      border-radius: 1rem;
      padding: 1rem 3rem;
      font-size: 1rem;
      text-transform: uppercase;

      &:hover {
        background-color: #434f7e;
        color: #fff;
        cursor: pointer;
      }

      &.selected {
        background-color: #434f7e;
        color: #fff;
      }
    }
  }

  .add-new-event-btn {
    .open-popup-btn {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      background-color: #acebf6;
      color: #000;
      padding: 1rem 3rem;
      font-size: 1rem;
      text-transform: uppercase;
      border-radius: 1rem;
      border: none;

      &:hover {
        background-color: #acebf6;
        color: #000;
        cursor: pointer;
      }

      .plus-icon {
        font-size: 1.5rem;
      }
    }
  }

  .published {
    h5 {
      font-size: 3rem;
      color: #acebf6;
      text-transform: uppercase;
      padding: 1rem 0;
      margin: 1rem 0;
    }
  }

  .event-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
      width: 30%;
      margin: 2rem 0;
    }
  }
`;

export default Information;
