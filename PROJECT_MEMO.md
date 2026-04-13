# プロジェクト管理メモ: DANCE SCHOOL SAVAGE

このファイルはプロジェクトごとの個別の管理シートです。開発着手時に内容を埋め、進捗に合わせて更新してください。
**※注意: セキュリティ保護のため、具体的なパスワードや秘密鍵などの「値」はこのファイルに直接書き込まないでください。**

---

## 1. プロジェクト概要
- **顧客名**: DANCE SCHOOL SAVAGE (Miu氏)
- **プロジェクト担当者**: 井上裕介
- **納期 / 目標公開日**: 稼働中
- **本番URL**: https://dance-school-savage.netlify.app/
- **テスト/ステージングURL**: GitHub Pages を利用

---

## 2. 外部サービス連携状況 (現状反映)
| サービス名 | 連携目的 | ステータス | 備考 |
| :--- | :--- | :--- | :--- |
| Google Analytics (GA4) | アクセス解析 | 要確認 | タグ未確認 |
| Google Search Console | SEO管理 | 設定済み | verificationタグ有り |
| XMLサイトマップ | 検索エンジン通知 | 設置済み | sitemap.xml存在 |
| OGP / SNS連携 | SNSシェア対策 | 設定済み | Instagram, LINE連携 |
| メール配信 (SPF/DKIM) | 到達率向上設定 | 未着手 | フォームはNetlify Forms |
| 決済 (Stripe/PayPal等) | 決済機能 | 未着手 | 現状記載なし |
| 外部素材 (写真・アイコン等) | ライセンス確認 | 確認済み | WebP変換済み |

---

## 3. 環境変数リスト (.env)
- [ ] `MICROCMS_API_KEY`: (過去ログにて言及があったが現在コード内に未確認)
- [ ] `MICROCMS_SERVICE_DOMAIN`: (同上)

---

## 4. 未解決・確認事項
- [ ] **Google Analytics**: 今後設定
- [ ] **特定商取引法**: 月謝制のため特商法ページの必要性を検討。
- [x] **プライバシーポリシー**: 独立したページを作成、全ページからリンク済み。

---

## 5. 技術スタック・構成
- **フロントエンド**: Vanilla JS / CSS / HTML
- **バックエンド**: Netlify Forms (お問い合わせ)
- **インフラ**: Netlify
- **CMS**: 無し (過去のMicroCMS連携は現状未確認)

---

## 7. ガイドライン遵守状況 (公開前必須)
- [x] **[セキュリティ](01_security_guidelines.md)**: タブナッピング対策、.env.example作成済み
- [x] **[SEO・パフォーマンス](02_seo_performance_guidelines.md)**: メタタグ、サイトマップ、画像最適化済み
- [x] **[コーディング・管理](03_coding_management_guidelines.md)**: assetsフォルダへの構造整理済み
- [x] **[運用・法務](04_operation_legal_guidelines.md)**: プライバシーポリシー作成、コピーライト更新済み
- [x] **[品質保証(QA)](05_quality_assurance_guidelines.md)**: 実施済み（リンク・バリデーション・コピーライト等）

---

## 8. その他メモ / 共有事項
- 2026/04/14: 新ガイドライン導入に伴う管理体制の初期化を完了。
