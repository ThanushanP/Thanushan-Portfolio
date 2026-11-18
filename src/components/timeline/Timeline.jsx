import React from "react";
import { education, experience, projects } from "../../data/portfolioData";
import "./timeline.css";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentDate = new Date();
const timelineStart = 2019 * 12;
const timelineEnd = (currentDate.getFullYear() + 1) * 12;
const timelineLength = timelineEnd - timelineStart;
const timelineYears = Array.from(
  { length: currentDate.getFullYear() - 2019 + 1 },
  (_, index) => 2019 + index,
);

const getMonthYear = (date) => {
  const month = date.match(new RegExp(`\\b(${monthNames.join("|")})\\b`))?.[0];
  const year = date.match(/\d{4}/)?.[0];

  if (!month || !year) {
    return null;
  }

  return {
    month: monthNames.indexOf(month),
    year: Number(year),
  };
};

const toMonthIndex = (year, month) => year * 12 + month;

const getTimelineRanges = (date, startDate) => {
  const months = Array.from(
    date.matchAll(new RegExp(`\\b(${monthNames.join("|")})\\b`, "g")),
    (match) => monthNames.indexOf(match[1]),
  );
  const years = (date.match(/\d{4}/g) || []).map(Number);

  if (!months.length || !years.length) {
    return [];
  }

  const start = toMonthIndex(years[0], months[0]);

  if (startDate) {
    const schoolStart = getMonthYear(startDate);
    if (schoolStart) {
      return [
        {
          start: toMonthIndex(schoolStart.year, schoolStart.month),
          end: toMonthIndex(years[0], months[0] + 1),
        },
      ];
    }
  }

  if (/present/i.test(date)) {
    return [
      {
        start,
        end: toMonthIndex(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
        ),
        ongoing: true,
      },
    ];
  }

  if (months.length === 1) {
    return [{ start, end: start, milestone: true }];
  }

  if (years.length > 2) {
    return years.map((year) => ({
      start: toMonthIndex(year, months[0]),
      end: toMonthIndex(year, months[1] + 1),
    }));
  }

  const endYear = years[1] || years[0];
  return [
    {
      start,
      end: toMonthIndex(endYear, months[1] + 1),
    },
  ];
};

const timelineSections = [
  {
    kind: "experience",
    label: "Experience",
    resumeSection: "experience",
    items: [
      {
        label: "In Development",
        date: "October 2026 — Present",
        externalUrl: "https://flexmoverobotics.com/",
        details: [
          { label: "Company", value: "FlexMove Robotics" },
          { label: "Dates", value: "October 2026 — Present" },
        ],
      },
      ...experience.map((item) => ({
        label: item.title,
        date: item.date,
        targetId: item.anchorId,
        details: [
          { label: "Company", value: item.company },
          { label: "Dates", value: item.date },
          { label: "Location", value: item.location },
        ],
      })),
    ],
  },
  {
    kind: "education",
    label: "Education",
    resumeSection: "education",
    items: [
      {
        label: "Computer Science",
        date: education.date,
        startDate: education.timelineStartDate,
        targetId: education.anchorId,
        details: [
          { label: "School", value: education.school },
          { label: "Degree", value: education.degree },
          {
            label: "Dates",
            value: `${education.timelineStartDate} — ${education.date.replace(
              /^Graduated\s+/,
              "",
            )}`,
          },
        ],
      },
    ],
  },
  {
    kind: "projects",
    label: "Projects",
    items: projects.map((item) => ({
      label: item.name,
      date: item.date,
      targetId: item.anchorId,
      details: [
        { label: "Project", value: item.name },
        { label: "Dates", value: item.date },
        { label: "Technologies", value: item.tech },
      ],
    })),
  },
];

function TimelineBar({
  ranges,
  label,
  targetId,
  externalUrl,
  resumeSection,
  details,
  onNavigate,
}) {
  const tooltipId = `${
    targetId || label.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  }-timeline-details`;
  const tooltipCenter = ranges.length
    ? (((ranges[0].start + ranges[0].end) / 2 - timelineStart) / timelineLength) *
      100
    : 50;
  const isNavigable = Boolean(targetId || externalUrl);
  const Bar = isNavigable ? "a" : "div";

  return (
    <Bar
      aria-label={
        externalUrl
          ? "Visit FlexMove Robotics website"
          : targetId
            ? `View ${label}`
            : label
      }
      aria-describedby={tooltipId}
      className="journey-event-bar"
      href={externalUrl || (targetId ? `#${targetId}` : undefined)}
      rel={externalUrl ? "noopener noreferrer" : undefined}
      role={isNavigable ? undefined : "group"}
      style={{
        "--journey-tooltip-center": `${tooltipCenter}%`,
        "--journey-year-step": `${100 / timelineYears.length}%`,
      }}
      tabIndex={isNavigable ? undefined : 0}
      target={externalUrl ? "_blank" : undefined}
      onClick={
        targetId
          ? (event) => {
              event.preventDefault();
              onNavigate({ targetId, section: resumeSection });
            }
          : undefined
      }
    >
      <span
        aria-hidden="true"
        className="journey-duration"
      >
        {ranges.map((range, index) => {
          const left = ((range.start - timelineStart) / timelineLength) * 100;
          const width = ((range.end - range.start) / timelineLength) * 100;

          return (
            <span
              className={`journey-duration-segment ${
                range.ongoing ? "journey-duration-ongoing" : ""
              }`}
              key={`${range.start}-${index}`}
              style={{
                left: `${left}%`,
                width: range.milestone ? "10px" : `${width}%`,
              }}
            />
          );
        })}
      </span>
      <span className="journey-event-tooltip" id={tooltipId} role="tooltip">
        <span className="journey-tooltip-title">{label}</span>
        <span className="journey-tooltip-details">
          {details.map((detail) => (
            <span className="journey-tooltip-detail" key={detail.label}>
              <span className="journey-tooltip-key">{detail.label}:</span>{" "}
              {detail.value}
            </span>
          ))}
        </span>
      </span>
    </Bar>
  );
}

export default function Timeline({ onNavigate }) {
  return (
    <section
      aria-label="Career, education, and project timeline"
      className="journey section-shell"
      id="Timeline"
    >
      <div className="section-heading">
        <p className="eyebrow">Career overview</p>
        <h2>My journey</h2>
        <p>Experience, education, and projects on one shared timeline.</p>
      </div>
      <div
        className="journey-chart"
        style={{ "--journey-year-count": timelineYears.length }}
      >
        <div className="journey-axis" aria-hidden="true">
          <div className="journey-year-labels">
            {timelineYears.map((year) => (
              <span className="journey-year-label" key={year}>
                <span className="journey-year-full">{year}</span>
                <span className="journey-year-short">
                  ’{String(year).slice(-2)}
                </span>
              </span>
            ))}
          </div>
        </div>
        {timelineSections.map((section) => (
          <section
            aria-label={`${section.label} timeline`}
            className={`journey-lane journey-lane-${section.kind}`}
            key={section.kind}
          >
            <h3 className="journey-lane-heading">{section.label}</h3>
            <div className="journey-lane-events">
              {section.items.map((item) => (
                <div
                  className="journey-event"
                  key={`${section.kind}-${item.label}`}
                >
                  <TimelineBar
                    ranges={getTimelineRanges(item.date, item.startDate)}
                    label={item.label}
                    targetId={item.targetId}
                    externalUrl={item.externalUrl}
                    resumeSection={section.resumeSection}
                    details={item.details}
                    onNavigate={onNavigate}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
