import { NextResponse } from "next/server";

const FootertermList = [
  "위 대출 상품의 금리는 연 기준 금리입니다",
  "대출조건은 당일 자정에 만료됩니다.",
  "정확한 한도와 금리 산출을 위해 신용정보를 조회합니다.",
  "한도와 금리를 조회해도 개인 신용평점에 영향을 주지 않습니다.",
  "대출금리와 한도는 조회 시점에 따라서 달라질 수 있습니다.",
  "핀다 전용 금리할인은 신용 상태에 따라서 상이할 수 있습니다.",
  "(주)핀다는 여러 제휴 금융회사와 대출모집 위탁계약을 체결하여 금융상품판매 업무를 대리･중개하는 금융관계법률에 따라 등록되어 있는 대출모집법인 (대출모집인번호 제2021-007호)이며, 금융감독원 포털사이트(www.fss.or.kr), 대출모집법인 조회(www.loanconsultant.or.kr)와 핀다 홈페이지 내 대출성 상품 금융상품판매대리･중개업 등록증표로 신원확인이 가능합니다.",
  "금융상품에 관한 계약을 체결하기 전, 상품설명서 및 약관을 읽어보시기 바랍니다.",
  "(주)핀다는 대출상품 계약을 체결할 권한이 없으며,(주)핀다와 대출모집 위탁계약을 체결한 각 제휴 금융회사(금융상품직접판매업자)가 대출 심사 등을 거쳐 직접 고객과 대출상품 계약을 체결합니다.",
  "고객센터 : 1533-6786 / care@finda.co.kr / 핀다앱 더보기 >  1:1 채팅문의",
];

export async function GET() {
  return NextResponse.json(FootertermList);
}
