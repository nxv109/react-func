import React from "react";
import { useTranslation } from "react-i18next";

export default function Breadcrumb({ breadcrumbItem }) {
  	const { t } = useTranslation();

	return (
		<div className="breadcrumb">
			<span>{t("Home")}</span>
			<span> / </span>
			<span>{t(breadcrumbItem).toLowerCase()}</span>
		</div>
	)
}