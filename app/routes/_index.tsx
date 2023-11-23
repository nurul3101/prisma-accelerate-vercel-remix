import type { MetaFunction } from "@vercel/remix";
import { Link } from "@remix-run/react";

export const config = { runtime: "nodejs" };

export const meta: MetaFunction = () => {
  return [{ title: "Vercel/Prisma/Remix issues" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <ul>
        <li>
          <a href="/api/test" target="_blank">
            Serverless, standard
          </a>
        </li>
        <li>
          <a href="/api/test-edge" target="_blank">
            Edge, standard
          </a>
        </li>
        <li>
          <a href="/api/test-awaited" target="_blank">
            Serverless, awaited
          </a>
        </li>
        <li>
          <a href="/api/no-accelerate" target="_blank">
            Prisma without accelerate
          </a>
        </li>
      </ul>
    </div>
  );
}
