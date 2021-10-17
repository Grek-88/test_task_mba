const BASE_URL =
  "https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses";

export default async function dataFetch() {
  const { data } = await fetch(BASE_URL).then((response) => response.json());

  // * фильтруем specializedSubjects, чтобы было по 2 модуля со специализациями, по 5 и более дисциплин в каждом модуле
  const specSubj = data.filter((el) => el.specializedSubjects?.length >= 10);

  //* фильтурем одинаковые названия программ
  const resultData = specSubj.reduce((acc, el) => {
    const res = acc.find((elem) => elem.title === el.title);

    if (!res) {
      acc.push(el);
    }

    return acc;
  }, []);

  return resultData;
}
