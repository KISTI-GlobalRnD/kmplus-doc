---
title: 어간 추출
sidebar_position: 3
---

어간을 기준으로 동의어를 자동으로 정렬, 두 개의 창을 활용하여 편집 할 수 있습니다.<br/>
필드 리스트 뷰의 [툴바](../program/workspace/fieldlistview.md#툴바) 또는 [컨텍스트 메뉴](../program/workspace/fieldlistview.md#컨텍스트-메뉴)를 통해 실행 할 수 있습니다.

## 실행

![어간 추출 화면](/img/screenshots/page_15.png)

1. 단어 필터링
   * 입력된 단어로 데이터를 필터링 합니다.
2. 필드명 (`Keywords (author's)`) 선택시 알파벳 순으로 정렬합니다.
3. Records 선택시 레코드 수에 따라 정렬합니다.
4. 결과 처리 방식
   1. **Create New Field**: 결과를 새로운 필드로 저장합니다.
   2. **Change Existing Field**: 결과를 기존 필드로 덮어씁니다.
5. 새로운 필드로 저장할 경우 이름을 지정합니다.
6. `Save as Thesaurus`: 현재의 stemming 결과를 시소러스로 저장합니다.
7. `Apply`: 현재의 stemming 결과를 적용합니다.

### 기타 기능

![어간 추출 화면 기능](/img/screenshots/page_16.png)

* **Set as the representative name:** 대표명을 하위 단어중 선택된 단어로 변경합니다.
* **Remove:** 하위 단어에서 제거합니다. (값이 삭제되지 않으며 대표명 레벨로 변경)
