---
title: 자연어 처리
sidebar_position: 3
---

2개 이상의 단어로 이루어진 구, 절, 문장에서 명사를 추출합니다.<br/>
영어는 Apache OpenNLP 한글은 루씬의 Arirang 형태소 분석기 사용합니다.
[메뉴바](../program/menu-bar.md#pre-processing) 또는 [툴바](../program/toolbar.md)를 통해 기능을 실행할 수 있습니다.

## 영문 명사 추출

![추출 필드 선택](/img/screenshots/nlp-select-field.png)

1. 팝업창에서 영문 명사를 추출하고자 하는 필드를 선택합니다. (예: Article Title)

![추출된 필드 확인](/img/screenshots/nlp-result.png)

2. 명사를 추출한 후, 추출 결과가 표시되고 자동으로 필드가 만들어집니다.
   * (필드명은 기존 필드명 + NLP(English Nouns))
