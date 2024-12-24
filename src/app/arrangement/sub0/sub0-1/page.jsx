import SearchArea from "@/components/SearchArea";
import Grid from "@/components/Grid";

export default function Page() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <h2>하위메뉴0-1</h2>
      </div>
      <div className="page-container">
        <section className="section-area">
          <SearchArea></SearchArea>
        </section>

        <section className="section-area">
          <div className="section-title">
            <h3>하위메뉴0-1 목록</h3>
          </div>

          {/* <Grid></Grid> */}
        </section>
      </div>
    </div>
  );
}
