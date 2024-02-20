import * as React from "react";
import {
  DetailsList,
  IconButton,
  Image,
  PrimaryButton,
  ImageFit,
} from "@fluentui/react";

// Sample data
const items = Array.from({ length: 50 }, (_, i) => ({
  key: (i + 1).toString(),
  accountNumber: (123456 + i).toString(),
  accountType: i % 2 === 0 ? "Checking" : "Savings",
  balance: 1000 * (i + 1),
  author: {
    name: `Author ${i + 1}`,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsnZD5qcEvUKP03lDIsUNwDicNqY2ciJAOqkGbLRGs3YnhTYkDvL0qumwh5ptuMEYt_5g&usqp=CAU",
  },
}));

// Columns definition
const columns = [
  {
    key: "column1",
    name: "Account Number",
    fieldName: "accountNumber",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "column2",
    name: "Account Type",
    fieldName: "accountType",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "column3",
    name: "Balance",
    fieldName: "balance",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "column4",
    name: "Author",
    fieldName: "author",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    onRender: (item) => (
      <>
        <Image
          src={item.author.imageUrl}
          width={50}
          height={50}
          imageFit={ImageFit.cover}
        />
        <span>{item.author.name}</span>
      </>
    ),
  },
  {
    key: "column5",
    name: "Actions",
    fieldName: "actions",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    onRender: (item) => (
      <>
        <IconButton
          iconProps={{ iconName: "Edit" }}
          title="Edit"
          ariaLabel="Edit"
          onClick={() => handleEdit(item)}
        />
        <IconButton
          iconProps={{ iconName: "Delete" }}
          title="Delete"
          ariaLabel="Delete"
          onClick={() => handleDelete(item)}
        />
      </>
    ),
  },
  // Add more columns as needed
];

const handleEdit = (item) => {
  // Handle edit action
  console.log("Edit", item);
};

const handleDelete = (item) => {
  // Handle delete action
  console.log("Delete", item);
};

const DataGrid = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 7;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div>
      <DetailsList items={currentItems} columns={columns} setKey="set" />;
      <div>
        <PrimaryButton onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </PrimaryButton>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <PrimaryButton
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </PrimaryButton>
      </div>
    </div>
  );
};

export default DataGrid;
