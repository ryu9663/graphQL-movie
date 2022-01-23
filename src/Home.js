import { useQuery } from "@apollo/client";
import { QueryInfo } from "@apollo/client/core/QueryInfo";
import React from "react";
import { HOME_PAGE } from "./queries";

export default function Home() {
  const { loading, error, data } = useQuery(HOME_PAGE);
  if (loading) return "Loading...";
  if (error) return `Error!`;
  console.log(data);
  return <span>yaya</span>;
}
