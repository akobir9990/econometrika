import React from "react";

function index() {
  return (
    <div>
      <div className="uppercase ">
        <h1 className="border-[1px] border-[solid] border-[red] ">
          Мобильное учебное пособие «Прикладная эконометрика» предназначено для
          студентов экономических направлений бакалавриата высших
          образовательных учреждений
        </h1>

        <div className="flex flex-wrap">
          <img
            className="w-[30%] min-w-[200px] h-[200px] border-[1px] border-[solid] border-[green] "
            src=""
            alt="???"
          />
          <div className="flex px-[10px] max-w-[600px] min-w-[200px] items-center">
            <h2 className="border-[1px] border-[solid] border-[blue] ">
              Автор пособия Мирзаев Сайибджан Сабитович – кандидат технических
              наук, доцент кафедры «Информационные технологии» Национального
              исследовательского университета «ТИИИМСХ»
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
