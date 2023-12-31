import { Table } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import IssueActions from "./issueActions";
import { IssueStatusBadge, LInk } from "@/app/components";
import Link from "../components/Link";
import { Status } from "@prisma/client";

const IssuesPage = async () => {
  const issues2 = await prisma.issue.findMany();
  console.log(issues2);

  const issues = [
    {
      id: 1,
      title: "srinivasu dandamudi",
      status: Status.OPEN,
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Sangeetha",
      status: Status.IN_PROGRESS,
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "Badari",
      status: Status.CLOSED,
      createdAt: new Date(),
    },
  ];

  return (
    <div>
      <div className="mb-5">
        <IssueActions />
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
