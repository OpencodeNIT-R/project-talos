export default function Button({
  backgroundColor,
  textColor,
  children,
  style = {},
  ...props
}) {
  if (!backgroundColor || !textColor) {
    console.warn(
      "Button component requires both backgroundColor and textColor props",
    );
  }

  return (
    <button
      style={{
        backgroundColor,
        color: textColor,
        borderRadius: "0.375rem",
        padding: "0.5rem 1rem",
        fontFamily: "Helvetica, sans-serif",
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "30px",
        letterSpacing: "normal",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
