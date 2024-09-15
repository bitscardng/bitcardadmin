import { ConfigProvider, Table } from "antd"
import { useEffect, useMemo, useState } from "react"
import { useDeclineUsdAccountMutation, useGetUsdVerificationQuery, useVerifyUsdAccountMutation } from "../../api/kycQueries";
import { toast } from "react-toastify";
import ConfirmModal from "./ConfirmModal";

const UsdVerificationTable = () => {
    const [tableParams, setTableParams] = useState({
        pagination: {
          current: 1,
          pageSize: 10,
        },
      });
      const [openApprove, setOpenApprove] = useState(false);
      const [openDecline, setOpenDecline] = useState(false);
      const [id, setId] = useState("");
      const [verifyUsdAccount, { isLoading: isVerifyUsdAccount }] = useVerifyUsdAccountMutation();
      const [declineUsdAccount, { isLoading: isDeclineUsdAccount }] = useDeclineUsdAccountMutation();
      const handleVerifyUsdAccount = (id) => {
        verifyUsdAccount(id)
            .unwrap()
            .then(() => {
                toast.success("Usd Account details approved");
            })
            .catch((err) => {
                toast.error(
                    err.message ||
                      err.msg ||
                      err?.data?.message ||
                      err?.data?.msg ||
                      "an error occured"
                  );
            })
      }
      const handleDeclineUsdAccount = (id) => {
        declineUsdAccount(id)
            .unwrap()
            .then(() => {
                toast.success("Usd Account details declined")
            })
            .catch((err) => {
                toast.error(
                    err.message ||
                      err.msg ||
                      err?.data?.message ||
                      err?.data?.msg ||
                      "an error occured"
                  );
            })
      }
    const columns = useMemo(
        () => [
            {
                render: (_, record, index) => `${index + 1}`,
                width: "5%",
            },
            {
                title: "Identification Number",
                dataIndex: "identification_number",
                render: (identification_number) => `${identification_number}`,
                width: "20%",
            },
            {
                title: "Nationality",
                dataIndex: "nationality",
                render: (nationality) => `${nationality}`,
                width: "15%",
            },
            {
                title: "Identification Document",
                dataIndex: "identification_document",
                render: (identification_document) => `${identification_document}`,
                width: "15%",
            },
            {
                title: "Passport Number",
                dataIndex: "passport_number",
                render: (passport_number) => `${passport_number}`,
                width: "15%",
            },
            {
                title: "Residency Status",
                dataIndex: "residency_status",
                render: (residency_status) => `${residency_status}`,
                width: "15%",
            },
            {
                title: "Proof of Earnings",
                dataIndex: "proof_of_earnings",
                render: (proof_of_earnings) => `${proof_of_earnings}`,
                width: "15%",
            },
            {
                title: "Proof of Address",
                dataIndex: "proof_of_address",
                render: (proof_of_address) => `${proof_of_address}`,
                width: "15%",
            },
            {
                title: "Occupation",
                dataIndex: "occupation",
                render: (occupation) => `${occupation}`,
                width: "15%",
            },
            {
                title: "Employer",
                dataIndex: "employer",
                render: (employer) => `${employer}`,
                width: "15%",
            },
            {
                title: "Employment Description",
                dataIndex: "employment_description",
                render: (employment_description) => `${employment_description}`,
                width: "20%",
            },
            {
                title: "Employment Status",
                dataIndex: "employment_status",
                render: (employment_status) => `${employment_status}`,
                width: "15%",
            },
            {
                title: "Passport",
                dataIndex: "passport",
                render: (passport) => `${passport}`,
                width: "15%",
            },
            {
                title: "Bank Statement",
                dataIndex: "bank_statement",
                render: (bank_statement) => `${bank_statement}`,
                width: "15%",
            },
            {
                title: "Utility Bill",
                dataIndex: "utility_bill",
                render: (utility_bill) => `${utility_bill}`,
                width: "15%",
            },
            {
                title: "Action",
                dataIndex: "_id",
                fixed: "right",
                render: (id) => (
                    <div className="flex flex-col gap-[0.2rem]">
                        <button
                            onClick={() => {
                                setOpenDecline(true);
                                setId(id);
                            }}
                            className="bg-[#FF6464] rounded-[20px] font-[Poppins]"
                        >
                            Decline
                        </button>
                        <button
                            onClick={() => {
                                setOpenApprove(true);
                                setId(id);
                            }}
                            className="bg-[#5FC88F] rounded-[20px] font-[Poppins]"
                        >
                            Approve
                        </button>
                    </div>
                )
            }
        ],
        []
    );
    const { data: result = [], isLoading, refetch } = useGetUsdVerificationQuery();
    const fetchData = () => {
        refetch()
            .then((result) => {
                setTableParams({
                    ...tableParams,
                    pagination: {
                        ...tableParams.pagination,
                        total: result?.count,
                        pageSize: result?.pagination?.totalItems
                    }
                })
            })
            .catch();
    };

    useEffect(() => {
        fetchData()
    }, [JSON.stringify(tableParams)]);

    const handleTableChange = (pagination) => {
        setTableParams({
            pagination
        })
    }
    return (
        <>
            <ConfigProvider
              theme={{
                token: {
                    colorBgContainer: "#191c32",
                    colorSplit: "#282c4a",
                    colorPrimary: "#FFF",
                    colorText: "#FFF",
                },
                components: {
                    Table: {
                        tableHeaderCellSplitColor: "#282c4a",
                        colorSplit: "#282c4a",
                    },
                },
              }}
            >
                <Table
                    columns={columns}
                    rowKey={(record) => record?._id}
                    dataSource={result?.data}
                    pagination={tableParams.pagination}
                    loading={isLoading}
                    onChange={handleTableChange}
                    scroll={{ x: 2000, y: 1200 }}
                />
            </ConfigProvider>
            <ConfirmModal
                open={openApprove}
                setOpen={setOpenApprove}
                loading={isVerifyUsdAccount}
                text={"Approve Usd Account Details"}
                action={handleVerifyUsdAccount}
                data={id}
            />
            <ConfirmModal
                open={openDecline}
                setOpen={setOpenDecline}
                loading={isDeclineUsdAccount}
                text={"Decline Usd Account Details"}
                action={handleDeclineUsdAccount}
                data={id}
            />
        </>
    )
}

export default UsdVerificationTable
