//달력
const data = [
    { date: "2024-03-21", content: "자룡쌤 생일" },
    { date: "2024-02-03", content: "고광현 생일" },
    { date: "2023-10-16", content: "김건오 생일" },
    { date: "2023-09-13", content: "김민영 생일" },
    { date: "2023-11-07", content: "김민주 생일" },
    { date: "2024-04-04", content: "김민형 생일" },
    { date: "2024-03-31", content: "김지현 생일" },
    { date: "2023-09-23", content: "김희주 생일" },
    { date: "2023-12-02", content: "류성제 생일" },
    { date: "2024-03-15", content: "박미성 생일" },
    { date: "2023-09-11", content: "서준원 생일" },
    { date: "2023-09-06", content: "선상범 생일" },
    { date: "2023-08-16", content: "송강산 생일" },
    { date: "2024-05-13", content: "송하은 생일" },
    { date: "2024-01-11", content: "안지용 생일" },
    { date: "2023-10-21", content: "양성호 생일" },
    { date: "2024-03-22", content: "오승엽 생일" },
    { date: "2024-01-31", content: "유명렬 생일" },
    { date: "2024-04-04", content: "유하림 생일" },
    { date: "2024-06-16", content: "이정민 생일" },
    { date: "2023-07-29", content: "이주현 생일" },
    { date: "2024-03-06", content: "이주호 생일" },
    { date: "2024-05-20", content: "이준기 생일" },
    { date: "2023-10-07", content: "이현진 생일" },
    { date: "2023-12-09", content: "임채진 생일" },
    { date: "2024-01-27", content: "한상명 생일" },
    { date: "2023-11-12", content: "현상균 생일" },
    { date: "2023-12-15", content: "기륜쌤 생일" },
  ];
  
  // 데이터 가공
  const calendarList = data.reduce(
    (acc, v) => ({ ...acc, [v.date]: [...(acc[v.date] || []), v.content] }),
    {}
  );
  
  // pad method
  Number.prototype.pad = function () {
    return this > 9 ? this : "0" + this;
  };
  
  const makeCalendar = (date) => {
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;
  
    const firstDay = new Date(date.setDate(1)).getDay();
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();
  
    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;
  
    let htmlDummy = "";
  
    for (let i = 0; i < firstDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }
  
    for (let i = 1; i <= lastDay; i++) {
      const date = `${currentYear}-${currentMonth.pad()}-${i.pad()}`;
  
      htmlDummy += `
          <div>
            ${i}
            <p>
              ${calendarList[date]?.join("</p><p>") || ""}
            </p>
          </div>
        `;
    }
  
    for (let i = limitDay; i < nextDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }
  
    document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
    document.querySelector(
      `.dateTitle`
    ).innerText = `${currentYear}년 ${currentMonth}월`;
  };
  const date = new Date();
  
  makeCalendar(date);
  
  // 이전달 이동
  document.querySelector(`.prevDay`).onclick = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
  };
  
  // 다음달 이동
  document.querySelector(`.nextDay`).onclick = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
  };
