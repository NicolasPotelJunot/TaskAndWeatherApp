export const DateToday = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <p className="border-t border-slate-300 py-2 text-sm mt-5">
      {`hoy : ${date}/${month}/${year} `}
    </p>
  );
};
