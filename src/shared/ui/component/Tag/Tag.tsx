interface TagProps {
  label: string;
}

function Tag({ label }: TagProps) {
  return (
    <span
      uno-border="1px solid #595DA7 rounded-20px"
      uno-text="12px #595DA7"
      x-class="px-10px py-3px truncate xl-text-20px"
    >
      {label}
    </span>
  );
}

export default Tag;
