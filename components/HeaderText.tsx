export const HeaderText = ({ text }: { text: string }) => {
  return (
    <p className="bg-clip-text  bg-gradient-to-r from-blue-500 from-10% via-indigo-500 via-30% to-pink-600 to-90% text-transparent flex items-center justify-center w-full  font-semibold text-3xl capitalize ">
      {text && text.length > 0 ? `welcome ${text}` : `welcome`}
    </p>
  );
};
