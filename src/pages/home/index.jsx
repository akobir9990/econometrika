import React from "react";

function index() {
  return (
    <div>
      <div className="uppercase">
        <div className="text-2xl font-semibold">
          «Прикладная эконометрика»
        </div>

        <div className="flex flex-wrap w-[100%] border-[1px] border-[solid] border-[red] ">
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
