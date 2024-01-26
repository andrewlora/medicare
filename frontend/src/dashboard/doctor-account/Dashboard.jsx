import { useState } from "react";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Tabs from "./Tabs";
const Dashboard = () => {
  const { loading, error } = useFetchData(`${BASE_URL}/doctor/profile/me`);
  const [tab, setTab] = useState("overview");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {error && !loading && <Error />}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
