import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

type BreadcrumbItem = {
  title: string;
  href: string;
  isActive?: boolean;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumbs = ({ items }: BreadcrumbProps) => {
  return (
    <div className="text-sm breadcrumbs font-normal text-gray-600">
      <ul>
        <>
          <li>
            <Link href="/">Home</Link>
          </li>
          {items.map(({ href, title, isActive }, index) => (
            <li key={index}>
              <Link
                className={classNames(
                  isActive && 'text-gray-800 font-semibold '
                )}
                href={href}
              >
                {title}
              </Link>
            </li>
          ))}
        </>
      </ul>
    </div>
  );
};
