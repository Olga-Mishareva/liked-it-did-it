import { FC } from "react";
import Link from "next/link";

import { db } from "@/db";
import styles from "./ListPage.module.css";
import { Card } from "../../helpers/intefaces";

type pathProp = {
  path: string;
};

const ListPage: FC<pathProp> = ({ path }) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} href={`/create/${path}`}>
        {path === "liked" ? "I liked it" : "I did it"}
      </Link>
      <ul className={styles.cardList}>
        {db.map((item: Card, i) => (
          <li className={styles.card} key={i}>
            <ol className={styles.eventList}>
              <p>{item.date}</p>
              {item.dayEvents.map((dayEvent: String, i) => (
                <li className="day-event" key={i}>
                  {dayEvent}
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
