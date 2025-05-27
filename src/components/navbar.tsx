import { navigationItems, proyectNames } from "@/utils/texts";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navigationItems.map((item) =>
              item.submenu ? (
                <li key={item.label}>
                  <details>
                    <summary>{item.label}</summary>
                    <ul className="p-2">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.href}>
                          <Link href={subItem.href}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )
            )}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          {proyectNames.short}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigationItems.map((item) =>
            item.submenu ? (
              <li key={item.label}>
                <details>
                  <summary>{item.label}</summary>
                  <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.href}>
                        <Link href={subItem.href}>{subItem.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn" href="/material">
          Material
        </a>
      </div>
    </div>
  );
}
