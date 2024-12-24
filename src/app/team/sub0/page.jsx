import SearchArea from "@/components/SearchArea";
import Grid from "@/components/Grid";

export default function Page() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <h2>부서관리</h2>
      </div>
      <div className="page-container">
        <section className="section-area">
          <SearchArea></SearchArea>
        </section>

        <section className="section-area">
          <div className="section-title">
            <h3>부서관리 목록</h3>
          </div>

          {/* <Grid></Grid> */}
        </section>
      </div>
    </div>
  );
}