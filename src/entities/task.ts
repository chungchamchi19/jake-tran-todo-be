import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Column } from "../database/dbAwareColumn";

export type TaskStatus = "todo" | "pending" | "completed";

export const listStatus = ["todo", "pending", "completed"];

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  title?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: false, enum: listStatus })
  status?: TaskStatus;

  @Column({ nullable: true })
  dueDate?: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", select: false })
  createdAt?: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP", select: false })
  updatedAt?: Date;
}
