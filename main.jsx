import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { BookOpen, CalendarDays, CheckCircle2, ClipboardList, GraduationCap, Menu, MessageCircle, Plus, Search, Sparkles, StickyNote, Trash2, X } from "lucide-react";
import { LANGS, T } from "./i18n.js";
import "./styles.css";

const loadLang = () => { try { return localStorage.getItem("sb-lang") || "en"; } catch { return "en"; } };

function App() {
  const [lang, setLang] = useState(loadLang);
  const t = T[lang] || T.en;
  const [tab, setTab] = useState("Home");
  const [tasks, setTasks] = useState([
    { id: 1, key: 0, subject: "Natural Sciences", date: "today", done: false },
    { id: 2, key: 1, subject: "English", date: "tomorrow", done: false },
    { id: 3, key: 2, subject: "Mathematics", date: "friday", done: true }
  ]);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [notes, setNotes] = useState([{ id: 1, key: true }]);
  const [question, setQuestion] =
