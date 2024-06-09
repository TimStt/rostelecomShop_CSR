import ContentLoader from "react-content-loader";

const SkeletonCard = () => {
  return (
    <ContentLoader
      speed={2}
      width={320}
      height={478}
      viewBox="0 0 320 478"
      backgroundColor="var(--color-black-2)"
      foregroundColor="var(--color-gray-6)"
    >
      <rect x="0" y="300" rx="9" ry="9" width="280" height="30" />
      <rect x="4" y="353" rx="0" ry="0" width="204" height="44" />
      <rect x="10" y="429" rx="0" ry="0" width="153" height="31" />
      <rect x="-2" y="9" rx="25" ry="25" width="320" height="320" />
      <rect x="147" y="184" rx="0" ry="0" width="45" height="18" />
    </ContentLoader>
  );
};

export default SkeletonCard;
