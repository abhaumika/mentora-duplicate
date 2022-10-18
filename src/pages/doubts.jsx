import RichTextEditor from "@mantine/rte";

const Doubts = () => {
  return (
    <div>
      <p className="text-3xl">Doubts</p>
      <RichTextEditor sticky={false} />

      {/* option to filter based on dept (from course_id) */}
    </div>
  );
};
export default Doubts;
