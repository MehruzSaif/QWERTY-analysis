import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container question my-5'>
            <h2 className="text-center fw-bold my-5 faq">Frequently Asked Questions</h2>

            <div id="accordionExample">
                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            কনটেক্সট এপিআই কি? এটার উদ্দেশ্য কি??
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5 fw-light">
                            <strong>
                                রিঅ্যাক্ট কনটেক্সট এপিআই হল একটি রিঅ্যাক্ট অ্যাপের জন্য কার্যকরভাবে গ্লোবাল ভেরিয়েবল তৈরি করার একটি উপায় যা পাস করা যেতে পারে। এটি "প্রপ ড্রিলিং" বা গ্রান্ডপ্যারেন্ট থেকে প্যারেন্ট, আবার প্যারেন্ট থেকে চাইল্ড এর কাছে প্রপস সরানোর বিকল্প।
                                Redux ব্যবহার করে স্টেট পরিচালনার জন্য প্রসঙ্গটিকে একটি সহজ, হালকা পদ্ধতি হিসাবেও উল্লেখ করা হয়। <br /> <br />

                                কনটেক্সট এপিআই হল রিঅ্যাক্টের 16.3 সংস্করণে যোগ করা একটি নতুন ধরনের বৈশিষ্ট্য যা একজনকে পুরো অ্যাপ জুড়ে (বা এর অংশ) হালকাভাবে এবং স্বাচ্ছন্দ্যে শেয়ার করতে দেয়।</strong>
                        </div>
                    </div>
                </div>


                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            CSS-এ ইনলাইন-ব্লক এবং ব্লক উপাদানগুলির মধ্যে পার্থক্য কী?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5 fw-light">
                            <strong><b>ইনলাইন-ব্লক:</b> <br></br> <br></br>
                                i. ইনলাইন-ব্লক উপাদানটিতে একটি প্রস্থ এবং উচ্চতা সেট করার অনুমতি দেয়।<br /><br />

                                ii. ইনলাইন-ব্লক উপাদানটির পরে একটি লাইন-ব্রেক যোগ করে না, তাই উপাদানটি অন্যান্য উপাদানের পাশে বসতে পারে।<br /><br />

                                iii. ইনলাইন-ব্লক হল লিস্ট আইটেমগুলি vertically না করে horizontally প্রদর্শন করে।<br /><br />


                                <b>ব্লক:</b> <br /><br />
                                i. ব্লক উপাদান সবসময় একটি লাইনে শুরু হয়।<br /><br />

                                ii. ব্লক উপাদান অন্যান্য উপাদান পিছনে বসতে অনুমতি দেয় না।<br /><br />

                                iii. ব্লক উপাদানের উপরে এবং নীচের মার্জিন আছে।<br /><br /></strong>
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            সেমান্টিক ট্যাগ কী?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5 fw-light">
                            <strong>যে ট্যাগগুলি শুধুমাত্র প্রদর্শনের পরিবর্তে একটি HTML পেজ এর অর্থ প্রদান করে, সেগুলিকে HTML সেমান্টিক ট্যাগ হিসাবে উল্লেখ করা হয়। এটি ওয়েব পেজগুলির বিভিন্ন বিভাগ এবং লেআউটগুলিকে আরও ভালভাবে বর্ণনা করার মাধ্যমে HTML এর বোঝায় ইম্প্রুভ করে৷   </strong> <br /> <br />

                            <strong><b>HTML-এ শব্দার্থবিদ্যা ট্যাগ ব্যবহার করার বেশ কিছু সুবিধা রয়েছে:</b> <br /><br />

                                i. সেমান্টিক HTML ট্যাগগুলি সার্চ ইঞ্জিন এবং অন্যান্য ব্যবহারকারী ডিভাইসগুলিকে ওয়েব পেজগুলির গুরুত্ব এবং প্রসঙ্গ নির্ধারণ করতে সহায়তা করে।<br /><br />

                                ii. সেমান্টিক উপাদান দিয়ে তৈরি পেজগুলি পড়া অনেক সহজ।<br /><br />

                                iii. এটা বৃহত্তর অ্যাক্সেসিবিলিটি আছে। এটি একটি ভাল ব্যবহারকারীর অভিজ্ঞতা প্রদান করে।<br /><br />
                            </strong>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Blogs;