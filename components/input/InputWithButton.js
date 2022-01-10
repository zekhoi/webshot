export default function InputWithButton({
  label,
  autocomplete = "",
  placeholder = "",
  type = "text",
  value = "",
  onChange = undefined,
  onClick = undefined,
  children,
}) {
  return (
    <>
      <div className="flex flex-row w-full">
        <input
          className="w-full text-sm rounded-l form-input"
          id={label}
          name={label}
          type={type}
          autoComplete={autocomplete}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <button
          onClick={onClick}
          className="px-5 py-3 text-sm font-medium text-center text-white border rounded-r border-nonary hover:border-octonary focus:bg-octonary bg-nonary hover:bg-octonary focus:ring-1 focus:ring-octonary"
        >
          {children}
        </button>
      </div>
    </>
  );
}
