import ProjectCard from "./ProjectCard";


const Work = () => {
    const works = [
      {
        imgSrc: "/images/project-1.jpg",
        title: "CodePadOP",
        tags: ["API", "Design", "Development"],
        projectLink: "https://codepadop.netlify.app/",
      },
      {
        imgSrc: "/images/project-2.jpg",
        title: "BudgetBudd",
        tags: ["Javascript", "Vite"],
        projectLink: "https://budgetbudd.netlify.app/",
      },
      {
        imgSrc: "/images/project-3.jpg",
        title: "ClockOP",
        tags: ["Development", "VanilaJs"],
        projectLink: "https://clockop.netlify.app/",
      },

      {
        imgSrc: "/images/project-5.jpg",
        title: "Password Manager",
        tags: ["password", "Development"],
        projectLink: "https://pasop.netlify.app/",
      },

      {
        imgSrc:
          "https://vercel.com/api/toolbar/link/mernlotteryop.vercel.app?via=project-screenshot&p=1&page=/",
        title: "Lottery Game ",
        tags: ["MERN", "Development", "React", "MongoDB"],
        projectLink: "https://mernlotteryop.vercel.app/",
      },

      {
        imgSrc: "https://app.netlify.com/sites/budgetbudd/",
        title: "Lottery Game ",
        tags: ["BudgetBuddy", "Development", "React", "DarkMode"],
        projectLink: "https://budgetbudd.netlify.app/",
      },
    ];
  return (
    <section className="section" id="work">
      <div className="container">
              <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
              <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                  {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                      <ProjectCard
                          key={key}   
                          imgSrc={imgSrc}
                          title={title}
                          tags={tags}
                      projectLink={projectLink}
                      classes="reveal-up"
                      />
                  ))}
              </div>
      </div>
    </section>
  );
}

export default Work
