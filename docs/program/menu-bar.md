---
title: 메뉴바
sidebar_position: 2
---
메뉴바는 KM+의 핵심 기능을 카테고리별로 정리해 두었습니다.

![메뉴바](/img/screenshots/menubar.png)

* **홈 (Home):** 프로젝트 생성(`프로젝트 만들기`), 프로젝트 열기 및 저장, 프로그램 종료 등 파일 및 프로젝트 관리 기능을 수행합니다.
* **전처리 (Pre-processing):** 데이터 분석 전 과정을 지원합니다. 데이터 합집합/교집합 생성, 영문/한글 형태소 분석, 필드 병합 등의 기능을 제공합니다.
* **통계 분석 (Statistics):** 논문 및 특허 데이터에 특화된 기초 통계 분석(연도별, 국가별, 저자별 논문 수 등)과 시각화 기능을 제공합니다.
* **네트워크 분석 (Network Analysis):** 2D/3D 행렬 생성, 네트워크 그래프 시각화, 외부 분석 도구(Pajek, VOSviewer, Gephi)와의 연동 기능을 포함합니다.
* **설정 (Settings):** 데이터 임포트 설정(Import Editor), 시소러스 관리(Thesaurus Editor), 화면 레이아웃 초기화 등을 수행합니다.
* **도움말 (Help):** 매뉴얼, 튜토리얼, 프로그램 정보 등을 확인할 수 있습니다.

### Home

![Home](/img/screenshots/menubar-home.png)

| 메뉴 항목            | 동작                                                                      |
| :------------------- | :------------------------------------------------------------------------ |
| **Create a project** | 클릭하여 **Create a project** 다이얼로그를 열고 새 프로젝트를 생성합니다. |
| **Save as**          | 현재 작업 중인 프로젝트를 새로운 이름이나 위치에 저장합니다.              |
| **Close**            | 현재 프로젝트 저장여부를 묻고 프로그램을 종료합니다.                      |

### Pre-processing

![pre-processing](/img/screenshots/menubar-preprocessing.png)

| 메뉴 항목                       | 하위 메뉴             | 동작                                                                                           |
| :------------------------------ | :-------------------- | :--------------------------------------------------------------------------------------------- |
| **New Dataset**                 | Project Union         | 클릭하여 **Project Union** 다이얼로그를 열고 합집합을 수행합니다.                              |
|                                 | Project Intersection  | 클릭하여 **Project Intersection** 다이얼로그를 열고 교집합을 수행합니다.                       |
| **Natural Language Processing** | English Nouns         | 선택된 필드에서 영문 명사를 추출합니다.                                                        |
|                                 | English Nouns Phrases | 선택된 필드에서 영문 명사 구를 추출합니다.                                                     |
|                                 | Korean Nouns          | 선택된 필드에서 한글 명사를 추출합니다.                                                        |
| **Merge Fields**                |                       | 클릭하여 **Merge Field** 다이얼로그를 열고 선택된 필드를 하나로 합친 새로운 필드를 생성합니다. |

### Analysis

![analysis](/img/screenshots/menubar-analysis.png)

| 메뉴 항목     | 동작                                                                                               |
| :------------ | :------------------------------------------------------------------------------------------------- |
| **2D Matrix** | 클릭하여 **2D Matrix** 다이얼로그를 열고 2개의 필드를 선택하여 행렬 뷰를 생성합니다.               |
| **3D Matrix** | 클릭하여 **3D Matrix** 다이얼로그를 열고 3개의 필드를 선택하여 행렬 뷰를 생성합니다.               |
| **MultiList** | 클릭하여 **MultiList** 다이얼로그를 열고 3개의 필드를 선택하여 필드 리스트 뷰 형식으로 나타냅니다. |

### Chart

![chart](/img/screenshots/menubar-chart.png)

| 메뉴 항목      | 동작                                                         |
| :------------- | :----------------------------------------------------------- |
| **List Chart** | 클릭하여 **List Chart** 다이얼로그를 열고 차트를 생성합니다. |

### Setting

![setting](/img/screenshots/menubar-setting.png)

| 메뉴 항목                | 하위 메뉴   | 동작                                                       |
| :----------------------- | :---------- | :--------------------------------------------------------- |
| **Open Window**          | Record View | 클릭하여 **RecordView** 창을 엽니다.                       |
| **Import Filter Viewer** |             | 클릭하여 **Import Filter Viewer** 다이얼로그를 실행합니다. |
| **Thesaurus Editor**     |             | 클릭하여 **Thesaurus Editor** 다이얼로그를 실행합니다.     |
