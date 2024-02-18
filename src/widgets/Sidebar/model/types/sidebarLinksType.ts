export interface SidebarItemsLinkType {
    path: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    text: string;
    authOnly?: boolean;
}
