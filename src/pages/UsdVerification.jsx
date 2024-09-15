import React, { useState } from "react";
import Search from "../components/Search";
import UsdVerificationTable from "../components/antd/UsdVerificationTable";

const UsdVerification = () => {
        const [search, setSearch] = useState("");
        return (
            <div>
                <Search
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <div className="mt-4">
                    <UsdVerificationTable />
                </div>
            </div>
        )
}

export default UsdVerification;
