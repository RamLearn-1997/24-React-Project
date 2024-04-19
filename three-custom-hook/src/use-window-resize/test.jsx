import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <h1>Use Window Resize Hook</h1>
      <p>width of window is {width}</p>
      <p>height of window is {height}</p>
    </div>
  );
}
