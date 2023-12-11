import PageHeader from "../Components/CommonComponents/PageHeader";
import SingleTask from "../Components/CommonComponents/SingleTask";

export default function page() {
  return (
    <>
      <PageHeader
        headertaxt={"Categorise"}
        description={
          "Here are a lots of cetagory that can help you to find your skill related task"
        }
      />

      <div className="p-10 lg:px-40">
        <SingleTask
          taskid={"123"}
          tasktext={"Create a navigation manu by HTML, CSS"}
          taskowner={"MD Naiem"}
        />
      </div>
    </>
  );
}
