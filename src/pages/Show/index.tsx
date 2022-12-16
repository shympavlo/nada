import React from "react";
import { useParams } from "react-router-dom";
import { PageTitle } from "../../components/common/PageTitle";
import { ShowInfoItem } from "../../components/Show/ShowInfoItem";
import { useGetShow } from "../../hooks/useGetShow";
import "./styles.css";

function Show() {
  const { id }: string | any = useParams();
  const { show, isLoading } = useGetShow(id);

  return (
    <div className="show-container">
      {isLoading ? (
        <p>Is Loading....</p>
      ) : (
        <>
          <div className="show-header">
            <PageTitle title="TV Bland" />
            <div className="show-header-info">
              <div className="show-header-img-wrapper">
                <img
                  src={
                    show?.image && show?.image?.original
                      ? show.image.original
                      : show.image.medium
                  }
                  alt={show.name}
                  className="show-image"
                />
              </div>
              <div className="show-header-name-wrapper">
                <h1 className="show-name">{show.name}</h1>
                <div
                  className="show-summary"
                  dangerouslySetInnerHTML={{ __html: show.summary }}
                ></div>
              </div>
            </div>
          </div>
          <div className="show-content">
            <div className="show-info">
              <ShowInfoItem title={"Language"} info={show.language} />
              <ShowInfoItem
                title={"Country"}
                info={show.network.country.name}
              />
              <ShowInfoItem
                title={"Scheduled"}
                info={show.schedule.days.join(", ")}
              />
              <ShowInfoItem title={"Status"} info={show.status} />
              <ShowInfoItem title={"Type"} info={show.type} />
            </div>
            <div className="show-info">
              <ShowInfoItem
                title={"Average Runtime"}
                info={show.averageRuntime}
              />
              <ShowInfoItem title={"Official Site"} info={show.officialSite} />
              <ShowInfoItem
                title={"Scheduled Time"}
                info={show.schedule.time}
              />
              <ShowInfoItem
                title={"Timezone"}
                info={show.network.country.timezone}
              />
              <ShowInfoItem title={"Premiered"} info={show.premiered} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Show;
