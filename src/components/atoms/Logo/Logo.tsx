import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Props for the Logo component
type LogoProps = {
  /** Optional width for the logo image. If only width is provided, height is calculated based on aspect ratio. */
  width?: number;
  /** Optional height for the logo image. If only height is provided (and no width), width is calculated based on aspect ratio. If both are provided, they are used directly. */
  height?: number; // Corrected spelling from heigth to height
  /** Optional Tailwind CSS classes to apply to the logo container (Link). This often defines the container's width. */
  className?: string;
};

/**
 * A reusable Logo component that displays a link to the homepage
 * with an image. The image size can be controlled via width/height props,
 * maintaining a default aspect ratio if only one dimension is provided.
 * The image attempts to fill 100% width of its parent container (the Link).
 */
const Logo = (props: LogoProps) => {
  // Default dimensions based on the specified ratio
  const defaultWidth = 85;
  const defaultHeight = 76.62;
  // Calculate the aspect ratio (Width / Height)
  const aspectRatio = defaultWidth / defaultHeight; // Ratio W:H = 85 / 76.62 ≈ 1.109

  let finalWidth: number;
  let finalHeight: number;

  // Determine the final width and height based on the provided props
  if (props.width !== undefined && props.height !== undefined) {
    // Case 1: Both width and height are explicitly provided, use them
    finalWidth = props.width;
    finalHeight = props.height;
  } else if (props.width !== undefined) {
    // Case 2: Only width is provided, calculate height based on aspect ratio
    finalWidth = props.width;
    // Calculate height = width / (W/H ratio) = width * (H/W ratio)
    finalHeight = props.width / aspectRatio;
  } else if (props.height !== undefined) {
    // Case 3: Only height is provided, calculate width based on aspect ratio
    finalHeight = props.height;
    // Calculate width = height * (W/H ratio)
    finalWidth = props.height * aspectRatio;
  } else {
    // Case 4: Neither width nor height is provided, use the default dimensions
    finalWidth = defaultWidth;
    finalHeight = defaultHeight;
  }

  // The Link component acts as the container and the clickable area.
  // The className prop allows external styling, typically for sizing or positioning this container.
  // The Image component is configured to take the determined finalWidth and finalHeight.
  // The combination of the parent Link's width (potentially set by className)
  // and the Image's intrinsic dimensions allows the image to fill the parent width
  // while maintaining its aspect ratio.
  return (
    // Apply any external classes to the Link container
    <Link className={`${props.className || ''}`} href="/">
      {/*
        Next.js Image component configuration:
        src: Path to the logo image. Should be relative to the public directory.
        alt: Descriptive text for accessibility.
        width/height: Calculated or provided dimensions.
        priority: Set to true if this image is critical for the Largest Contentful Paint (LCP).
        The Image component will render an <img> tag with the specified width and height,
        allowing it to scale within its parent (the Link) while maintaining the aspect ratio.
      */}
      <Image priority src="/logo-light.webp" alt="Logo" width={finalWidth} height={finalHeight} />
    </Link>
  );
};

export default Logo;
