class RoleQuery {
    /**
     * 名称模糊条件
     */
    public likeName: string = '';

    /**
     * 条件包含的id
     */
    public ids: string[] = [];

    /**
     * 条件排除的id
     */
    public outIds: string[] = [];
}

export default RoleQuery;
