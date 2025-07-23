import Image from 'next/image';

type CardProps = {
  imgsrc: string;
  title: string;
  desc: string;
};

const SkillCard = ({ imgsrc, title, desc }: CardProps) => {
  return (
    <div className="card flex max-w-[425px] cursor-pointer flex-col overflow-hidden rounded-[18px] bg-gray-50 px-8 pt-8 pb-6 shadow-lg transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-xl">
      <div
        className="flex flex-col gap-4"
        // initial='idle'
        // whileHover='hover'
      >
        <Image
          alt=""
          className="h-auto w-full rounded-[8px]"
          height={196}
          src={imgsrc}
          width={381}
        />
        <div className="card-content text-left">
          <h3 className="mb-2 font-display font-semibold text-xl leading-[1.9375rem] sm:text-2xl">
            {title}
          </h3>
          <p className="mb-6 text-base text-gray-600 leading-[1.5rem] sm:text-lg">
            {desc}
          </p>
          {/* <button className='text-center font-medium text-zinc-700 w-full py-2 rounded-[10px] bg-white border border-zinc-200'>
                        More detail
                    </button> */}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
