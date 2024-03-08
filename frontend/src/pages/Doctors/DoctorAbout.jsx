import { formulateDate } from "../../utils/formulateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div className="">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9 ">
            Ayush Pandey{" "}
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eum
          ipsum praesentium dolorem illo consequatur quos optio accusamus
          recusandae ut, doloremque illum quo quae perferendis, repudiandae
          beatae? Error deleniti esse, labore reprehenderit doloribus impedit!
          Voluptatem voluptatum totam vero aut quidem odio quod consequuntur, ex
          consequatur dolores nemo possimus. Necessitatibus quod id ad neque,
          voluptates aut temporibus sint eaque nihil facilis!
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pl-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formulateDate("09-13-2014")} - {formulateDate("09-13-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital,New York
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formulateDate("07-04-2010")}-{formulateDate("09-13-2014")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital,New York
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12px">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formulateDate("07-04-2010")}-{formulateDate("09-13-2014")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital,New York
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formulateDate("07-04-2010")}-{formulateDate("09-13-2014")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital,New York
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
