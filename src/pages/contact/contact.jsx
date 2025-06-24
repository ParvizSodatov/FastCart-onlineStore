import mail from '@/assets/mail.png'
import phone from '@/assets/phone.png'

export default function Contact() {
  return (
    <div className="flex flex-col gap-[25px] lg:flex-row lg:justify-center lg:gap-[50px] :lg items-center lg:mt-[100px] ">
      <div className="shadow-[0px_0px_10px_0px] rounded-[5px] w-[85%] mx-auto lg:w-[20%] lg:p-[70px_20px] lg:mx-0">
        <div className="w-[80%] p-[10px] flex flex-col gap-[10px]">
          <div className="flex items-center gap-[20px]">
            <img src={phone} alt="" />
            <h2 className="font-medium text-[22px]">Call To Us</h2>
          </div>
          <div>
            <p className="text-[14px]">We are available 24/7, 7 days a week.</p>
            <p className="text-[14px]">Phone: +8801611112222</p>
          </div>
        </div>

        <div className="w-[85%] p-[10px] flex flex-col gap-[10px]">
          <div className="flex items-center gap-[20px]">
            <img src={mail} alt="" />
            <h2 className="font-medium text-[22px]">Write To US</h2>
          </div>
          <div>
            <p className="text-[14px]">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-[14px]">Emails: customer@exclusive.com</p>
            <p className="text-[14px]">Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[20px] shadow-[0px_0px_10px_0px] rounded-[5px] p-[20px] w-[85%] mx-auto lg:w-[50%] lg:mx-0 ">
        <div className="flex flex-col w-[85%] mx-auto gap-[20px]">
          <input
            type="text"
            className=" p-[15px_20px] rounded-[5px] border-[1px] border-[#D3D3D3]"
            placeholder="Name"
          />
          <input
            type="text"
            className=" p-[15px_20px] rounded-[5px] border-[1px] border-[#D3D3D3] "
            placeholder="Email"
          />
          <input
            type="text"
            className=" p-[15px_20px] rounded-[5px] border-[1px] border-[#D3D3D3]"
            placeholder="Phone"
          />
        </div>
        <div className="w-[85%] mx-auto flex flex-col items-end gap-[15px]">
          <input
            type="text"
            className=" rounded-[5px] border-[#D3D3D3] border-[1px] p-[15px_20px] h-[100px] lg:w-[100%] w-[100%] m-auto mr-[10px]  "
            placeholder="Your Massage"
          />
          <button className="p-[12px_25px] bg-[#DB4444] border-none rounded-[5px] text-[#fff]">
            Send Massage
          </button>
        </div>
      </div>
    </div>
  );
}
