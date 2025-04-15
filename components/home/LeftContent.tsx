import Image from "next/image";
import Button from "../common/Button";

interface BenefitItem {
  id: number;
  text: string;
}

export default function LeftContent() {
  const benefits: BenefitItem[] = [
    {
      id: 1,
      text: "Start growing your influence right away—no waiting required!",
    },
    {
      id: 2,
      text: "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    },
    { id: 3, text: "Use a Personal AI Worker to boost your content" },
    {
      id: 4,
      text: "Learn from expert-led courses designed for aspiring influencers",
    },
  ];

  return (
    <div className="xl:w-(--w-516px) z-30 px-5 pt-5 pb-10 xl:p-0">
      <h2 className="font-bold text-(length:--spacing-25px) font-(family-name:--font-urbanist) leading-none xl:text-(length:--spacing-35px) max-xl:text-center">
        Want to Turn Social Media Into a Profitable Career?
      </h2>
      <h2 className="font-bold text-primary shadow-text text-(length:--spacing-25px) font-(family-name:--font-urbanist) leading-none xl:text-(length:--spacing-35px) max-xl:text-center">
        Discover your way to success with Fametonic:
      </h2>
      <ul className="font-(family-name:--font-figtree) flex flex-col gap-2.5 mt-(--spacing-22px) mb-(--spacing-22px) xl:gap-(--spacing-13px) xl:mt-4 xl:mb-(--spacing-30px)">
        {benefits.map((benefit) => (
          <li key={benefit.id} className="flex items-center gap-2.5">
            <Image
              src="/star.png"
              alt=""
              width={22}
              height={22}
              aria-hidden="true"
              className="flex-shrink-0"
            />
            <p className="text-base leading-(--spacing-22px) font-medium xl:font-semibold">
              {benefit.text}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col-reverse justify-center gap-8 xl:gap-(--spacing-30px) xl:flex-col xl:justify-start">
        <div className="md:max-w-(--w-313px) w-full flex flex-col gap-2.5 text-center max-xl:mx-auto">
          <Button
            variant="secondary"
            rightIcon={
              <Image
                src="/arrow-right.png"
                alt="arrow right"
                width={7}
                height={7}
              />
            }
          >
            Get Started
          </Button>
          <p className="text-xs leading-4 font-(family-name:--font-figtree)">
            1-minute quiz for personalized Insights
          </p>
        </div>
        <div className="font-(family-name:--font-figtree) flex flex-col gap-(--spacing-19px) xl:gap-3 text-gray max-xl:mx-auto max-xl:w-4/5 max-xl:text-center">
          <p className="text-xs leading-none font-medium">
            By clicking {`"Get Started"`}, you agree with Terms and Conditions,
            Privacy Policy, Subscription Terms
          </p>
          <p className="text-(length:--spacing-10px)">
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
