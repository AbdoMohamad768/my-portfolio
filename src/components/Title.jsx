function Title({ header, paragraph }) {
  return (
    <div className="text-center mb-15">
      <h1 className="text-primary mb-2 font-[500] text-xl">{header}</h1>
      <p className="text-4xl font-[700]">{paragraph}</p>
    </div>
  );
}

export default Title;
