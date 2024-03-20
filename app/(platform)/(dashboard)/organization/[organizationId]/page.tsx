import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OriganizationIdPage = () => {

    const {userId, orgId} = auth();

    return (
        <div>
            Test
        </div>
    )
}

export default OriganizationIdPage;